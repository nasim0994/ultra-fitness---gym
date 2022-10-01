function getLocalStorage() {
  let breakTime = 0;
  const localStorageBreakTime = localStorage.getItem("break-time");
  if (localStorageBreakTime) {
    breakTime = localStorageBreakTime;
  }
  return breakTime;
}

export { getLocalStorage };
