import React from 'react';
import Container from './components/Container.js';
import Content from './components/Content.js';
import Layout from './components/Layout.js';
import Home from './components/Home.js';
import About from './components/About.js';
import Details from './components/Details.js';
import Detail from './components/Detail.js';
import Users from './components/Users.js';
import ErrorPage from './components/ErrorPage.js';
import { ErrorBoundary } from 'react-error-boundary';
import Fallback from './components/Fallback.js';
import { Routes, Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import '../src/style.css';

export default function App() {
  let navigate = useNavigate();
  return (
    <Container>
      <Layout />
      <ErrorBoundary
        FallbackComponent={Fallback}
        onReset={() => {
          navigate('/');
        }}
      >
        <Content>
          <Routes>
            <Route path="/" element={<Home placeholder="" />} />
            <Route path="/user" element={<Users />}>
              <Route path="details" element={<Details atr="error" />} />
              <Route path=":userId" element={<Detail />} />
            </Route>
            <Route path="about" element={<About />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Content>
      </ErrorBoundary>
    </Container>
  );
}
