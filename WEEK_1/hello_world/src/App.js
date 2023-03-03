function App(props) {
    const currDate = new Date();


    return ( <
        div >
        <
        h1 > My Name is Dedan Okware < /h1> <
        h2 > Today 's date is {currDate.toLocaleDateString()}  and the time now is {currDate.toLocaleTimeString()}</h2> < /
        div >
    );
}

export default App;