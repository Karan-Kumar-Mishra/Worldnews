import Background from "./ui/Background";
export default function Feedback() {
  return (
    <div
      className="h-full md:w-full w-full bg-black flex justify-center items-center content-center p-50 md:p-30">
      <Background />
      <form action="https://formsubmit.co/2e725f6230466d3c0b246217003191d6" method="POST" className="flex flex-col gap-5 rounded-2xl ">
        <input className="p-2 rounded-2xl border-1 border-gray-600 " type="text" name="name" placeholder="Enter your name" />
        <input className="p-2 rounded-2xl border-1 border-gray-600" type="email" name="email" placeholder="Enter your email" />
        <textarea
          required
          placeholder="Message"
          cols={40}
          rows={5}
          className="p-2 rounded-2xl border-1 border-gray-600 "
          name="subject"
        ></textarea>
        <button
          type={"submit"}
          value={"Send"}
          className=" border-1  rounded-2xl p-1 border-gray-600 ">Send Message</button>
      </form>
    </div>
  );
}
