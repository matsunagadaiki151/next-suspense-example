const Loading = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="animate-spin h-10 w-10 border-4 border-blue-500 rounded-full border-t-transparent"></div>
      <div className="mt-4">ローディング中です。</div>
    </div>
  );
};

export default Loading;
