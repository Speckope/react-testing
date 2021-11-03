// This is component for easier redux testing setup!
import { Provider } from 'react-redux';
import { store } from './state';

const RootComponent: React.FC = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default RootComponent;
