function App() {

    const count = 10;
    const name = 'Jane';
    const booleanTrue = true;
    const booleanFalse = false;
    const nullValue = null;
    const undefinedValue = undefined;

    return (
        <><div
            style={{
                height: '100px',
                width: '100px',
                backgroundColor: 'lightblue',
            }}
        >   </div>
        <ul>
                <li>Number: {count}</li>
                <li>String: {name}</li>
                <li>True: {booleanTrue}</li>
                <li>False: {booleanFalse}</li>
                <li>Null: {nullValue}</li>
                <li>Undefined: {undefinedValue}</li>
        </ul>
        <img
      src="https://picsum.photos/150/150" alt="This is a randomly picked photo"
        />
        <p
      style={{
        fontWeight: 'bold',
        fontStyle: 'italic',
        color: 'blue',
      }}
    >
      Hi there
    </p>
    </>

    );

}

export default App;