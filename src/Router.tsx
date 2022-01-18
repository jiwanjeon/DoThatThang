import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import { Main } from './main/Main';
import Detail from './detail/Detail';
import Footer from './components/Footer/Footer';

function Router() {
  return (
    <BrowserRouter basename="/DoThatThang">
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/main" element={<Main />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
export default Router;
