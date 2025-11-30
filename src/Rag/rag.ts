
import { MemoryVectorStore } from "langchain/vectorstores/memory";
import { GoogleGenerativeAIEmbeddings } from "@langchain/google-genai";
import { RecursiveCharacterTextSplitter } from "@langchain/text_splitter";
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";

class LangChainRAG {
    constructor(apiKey) {
        this.embeddings = new GoogleGenerativeAIEmbeddings({
            apiKey: apiKey,
            model: "embedding-001" // Google's embedding model
        });

        this.llm = new ChatGoogleGenerativeAI({
            apiKey: apiKey,
            model: "gemini-1.5-flash-latest",
            temperature: 0.7,
        });

        this.vectorStore = null;
    }

    async initializeRAG(documents) {
        // Split documents into chunks
        const textSplitter = new RecursiveCharacterTextSplitter({
            chunkSize: 1000,
            chunkOverlap: 200,
        });

        const docs = await textSplitter.createDocuments(documents);

        // Create vector store
        this.vectorStore = await MemoryVectorStore.fromDocuments(
            docs,
            this.embeddings
        );
    }

    async queryRAG(question) {
        if (!this.vectorStore) {
            throw new Error("RAG system not initialized");
        }

        // Retrieve relevant documents
        const relevantDocs = await this.vectorStore.similaritySearch(question, 3);

        // Create context
        const context = relevantDocs.map(doc => doc.pageContent).join("\n\n");

        // Create prompt template
        const prompt = `
You are a helpful AI assistant. Use the following context to answer the user's question.

Context:
${context}

User Question: ${question}

Answer:`;

        const response = await this.llm.invoke(prompt);
        return response.content;
    }
}