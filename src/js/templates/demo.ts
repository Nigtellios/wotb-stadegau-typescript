type ConsoleMessage = {
  type: string,
  message: string,
};

// eslint-disable-next-line no-console
const defaultMessage = ({ type, message }: ConsoleMessage) => console.log(`${type}: ${message}`);
defaultMessage({ type: 'Running', message: 'demo.tsx' });
