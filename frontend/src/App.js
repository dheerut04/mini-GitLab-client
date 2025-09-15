import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import { Login } from './components/Login/Login.tsx';
import { useState, useEffect, Children } from 'react';
import { DiffViewWidget } from './components/Diffview/Diffview.widget.tsx';

export const App = () => {
  const [gitLabToken, setGitLabToken] = useState('');

  useEffect(() => {
    const savedToken = localStorage.getItem('gitlab_token');
    if (savedToken) {
      setGitLabToken(savedToken);
    }
  },[]);

  //we can use this to restrict other paths 😉
  const ProtectedRoute = ({Children}) => {
    if(!gitLabToken){
      return <Navigate to={'/login'} />
    }
    return Children;
  }

  return (
    <Routes>
      <Route path="/login" element={<DiffViewWidget />} />
      <Route path="/diff-view" element={
        <ProtectedRoute>
          <DiffViewWidget />
        </ProtectedRoute>
      } />
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
}
