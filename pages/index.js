import Counter from '../components/Counter'; // TODO: COMMENT IN FOR AUTH
// import { signOut } from '../utils/auth'; // TODO: COMMENT IN FOR AUTH
// import { useAuth } from '../utils/context/authContext'; // TODO: COMMENT IN FOR AUTH

function Home() {
  // const { user } = useAuth();
  const counters = [{ title: 'Count Uno' }, { title: 'Counter Dos' }, { title: 'Counter Tres' }];
  return (
    <div>
      <p>Hello Paradise!</p>
      {counters.map((counter) => (
        <Counter key={counter.title} title={counter.title} />
      ))}
    </div>
  );
}

export default Home;
