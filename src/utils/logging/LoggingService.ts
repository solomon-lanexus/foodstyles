const LoggingService = {
  log(message: string, ...rest: any[]) {
    console.log(message, ...rest);
  },
  error(message: string, ...rest: any[]) {
    console.log(message, ...rest);
  },
  group: (name: string) => {
    console.group(name);
  },
  groupEnd: () => {
    console.groupEnd();
  },
};

export default LoggingService;
