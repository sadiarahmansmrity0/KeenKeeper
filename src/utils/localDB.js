
const getAllFromLocalDB = () => {
    if (typeof window === 'undefined') return []; // not in browser

    const inerection = JSON.parse(localStorage.getItem('inerection'));
    return inerection || [];
}

const addToLocalDB = (interection) => {
    if (typeof window === 'undefined') return; // prevent crash
    const allInterection = getAllFromLocalDB();
    allInterection.push(interection);
    localStorage.setItem('inerection', JSON.stringify(allInterection));
}

export { getAllFromLocalDB, addToLocalDB };