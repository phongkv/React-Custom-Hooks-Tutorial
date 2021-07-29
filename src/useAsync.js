import React, { useMemo, useState, useEffect } from "react";
import { render } from "react-dom";

function useAsync() {
  return useMemo(() => {
    let controller;
    const start = (url, options, update) => {
      // sử dụng AbortController để thông báo với fetch rằng chúng ta muốn cancel 1 request
      controller = new AbortController();
      const signal = controller.signal;
      fetch(url, { ...options, signal })
        .then((x) => x.json())
        .then((data) => update({ data }))
        .catch((error) => update({ error }));
      update({ loading: true, data: undefined, error: undefined });
    };
    const cancel = () => {
      if (!controller) return;
      // khi cancel request thì sẽ có 1 error được ném ra
      controller.abort();
    };
    return [start, cancel];
  }, []);
}

// cách sử dụng
const App = () => {
  const [{ loading, data = [], error }, update] = useState({});
  const [start, cancel] = useAsync();
  const getTodo = () =>
    start("https://jsonplaceholder.typicode.com/todos", null, update);

  useEffect(() => {
    getTodo();
    // cô gắng cancel request sau 10ms
    // vì request hoàn tất quá nhanh không thể nhấn vào Cancel button
    setTimeout(cancel, 10);
  }, [start, cancel]);

  return (
    <>
      <div>{loading && "Loading..."}</div>
      <div>{error && `Something went wrong: ${error.message}`}</div>
      <button onClick={cancel}>Cancel</button>
      <button onClick={getTodo}>Refetch</button>
      <xmp>{JSON.stringify(data, null, 2)}</xmp>
    </>
  );
};

render(<App />, document.getElementById("root"));