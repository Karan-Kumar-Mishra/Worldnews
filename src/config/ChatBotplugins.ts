import LlmConnector from "@rcb-plugins/llm-connector";
import MarkdownRenderer from "@rcb-plugins/markdown-renderer";
const plugins = [LlmConnector(),MarkdownRenderer()];
export default plugins;