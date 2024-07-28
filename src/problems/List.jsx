const List = () => {
  const Friends = ["Abid", "Navid", "Mumu", "Lisa", "Faysal", "Jesika", "Mona", "Faria"];

  return (
    <div>
      <h1 className=" text-4xl font-bold text-center pt-3">Problem 4</h1>
      <ul>
        {Friends.map((friend, index) => (
          <li key={index}>
            {index + 1}.{friend}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
