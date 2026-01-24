const Contact = () => {
  return (
    <div className="min-h-[70vh] mt-[100px] ml-4" id="contact">
      <h2 className="text-center font-semibold mt-10 text-[30px] md:text-[50px] font-[Kalam] ">
        Let's Build Something Great!
      </h2>
      <h3 className="text-center text-[20px] md:text-[30px] ">
        Open to new opportunities. Let's chat!
      </h3>
      <div
        className="border-2 mt-12 w-full p-6 md:p-12 bg-white"
        style={{
          borderRadius: "255px 15px 225px 15px / 15px 225px 15px 255px",
        }}
      >
        <div className="flex flex-col gap-6 md:gap-8">
          {/* Name and Email Row */}
          <div className="flex flex-col sm:flex-row gap-6 md:gap-8">
            <div className="w-full">
              <label className="block text-lg md:text-xl mb-2 text-gray-600">
                Name
              </label>
              <input
                type="text"
                className="w-full text-lg md:text-xl pb-2 border-b-2 border-gray-400 focus:border-gray-800 focus:outline-none hover:border-gray-800 transition-colors bg-transparent"
                style={{ fontFamily: '"Patrick Hand", cursive' }}
              />
            </div>
            <div className="w-full">
              <label className="block text-lg md:text-xl mb-2 text-gray-600">
                Email
              </label>
              <input
                type="email"
                className="w-full text-lg md:text-xl pb-2 border-b-2 border-gray-400 focus:border-gray-800 focus:outline-none hover:border-gray-800 transition-colors bg-transparent"
                style={{ fontFamily: '"Patrick Hand", cursive' }}
              />
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="block text-lg md:text-xl mb-2 text-gray-600">
              Message
            </label>
            <textarea
              rows={4}
              className="w-full text-lg md:text-xl pb-2 border-b-2 border-gray-400 focus:border-gray-800 focus:outline-none hover:border-gray-800 transition-colors bg-transparent resize-none"
              style={{ fontFamily: '"Patrick Hand", cursive' }}
            />
          </div>

          {/* Button */}
          <div className="text-center mt-2 md:mt-4">
            <button
              className="px-8 md:px-12 py-2.5 md:py-3 text-xl md:text-2xl bg-[#1B66C0] text-white rounded hover:bg-[#19559d] transition-colors font-semibold"
              style={{ fontFamily: '"Patrick Hand", cursive' }}
            >
              Send Note
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
