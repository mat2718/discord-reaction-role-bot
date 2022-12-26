export const elseThrow = (error: string): never => {
  throw new Error(error);
};

export const logError = (
  error: unknown,
  log: (input: (string | undefined)[] | unknown) => void,
): void => {
  return error instanceof Error
    ? log(
        `${new Date().toISOString()}\r\n${error.name}\r\n${error.message}\r\n${
          error.stack
        }`,
      )
    : log(error);
};
