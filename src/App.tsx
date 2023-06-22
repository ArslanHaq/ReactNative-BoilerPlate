import 'react-native-gesture-handler';
import React, {useContext, useEffect, useState} from 'react';
import {AuthProvider} from './Auth/authProvider';

import {Routes} from './Routes';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
};
export default App;
