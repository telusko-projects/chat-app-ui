export const ChatRoom = () => {
  return (
    <div className="max-w-7xl mx-auto my-10 h-[90vh] border border-emerald-600 rounded-md">
      <div className="bg-gradient-to-r from-green-500 to-green-700 h-[100px] p-10 text-white font-semibold text-xl">
        Hey Prasad, Let's chat to share what's on your mind. 💡
      </div>
      <div className="grid grid-cols-[2fr,1fr] h-[calc(90vh-100px)] px-6 py-4 divide-x-2">
        <div className="flex flex-col h-auto">
          <div className="grow"></div>
          <div className="grow-0 py-4 pr-6">
            <div className="flex w-full items-center space-x-2">
              <input
                className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                type="text"
                placeholder="start typing"
              ></input>
              <button
                type="button"
                className="rounded-md bg-emerald-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500"
              >
                Send
              </button>
            </div>
          </div>
        </div>
        <div className="px-6">Joined</div>
      </div>
    </div>
  );
};
