import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import FormLayout from './components/FormLayout';
import Team from './components/team';

export function App() {
  return (
    <Routes>
      <Route  path="/" element={<Layout />}>
        <Route index  element={<div>Home</div>} />
        <Route path="form-layout" element={<FormLayout />} />
        <Route path="team" element={<Team />} />

      </Route>
    </Routes>
  );
}

export default App;
