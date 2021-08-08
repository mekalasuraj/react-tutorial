import React from 'react';

const UserContext = React.createContext();

const ProvideContext = UserContext.Provider;

const ConsumeContext = UserContext.Consumer;

export {ProvideContext,ConsumeContext};