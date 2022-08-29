import Header from './Header';

const INFO = {
  firstName: 'Mason',
  middleName: 'Jeffrey',
  lastName: 'Dubelbeis',
  email: 'Mason.Dubelbeis@gmail.com',
  number: '732-228-2390',
  projectURLS: ['', '', '', ''],
  about: `I am Mason Jeffrey Dubelbeis, a Front End Web Developer. I have two years experience in working with Front End web technologies and developing beautiful responsive designs for the end user.`,
};

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      {/* ABOUT */}
      {/* CTA/RESUME */}
      {/* PROJECTS */}
      {/* FOOTER */}
    </div>
  );
};

export default App;
