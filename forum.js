function newFreelancer() {
    const names = ["Bill", "Joe", "Mitch", "Sylvia"]
    const occupations = ["Plumber", "Electrician", "Musician", "Artist"]
    const price = [35, 40, 45, 50, 55, 60, 65, 70]
    let selectedName = names[Math.floor(Math.random() * names.length)]
    let selectedOccupation = occupations[Math.floor(Math.random() * occupations.length)]
    let selectedPrice = price[Math.floor(Math.random() * price.length)]
    let freeDiv = document.createElement('div')
    freeDiv.className = 'freelancer'
    freeDiv.innerHTML = `<h2>${selectedName}</h2>
                         <h3>${selectedOccupation}</h3>
                         <h3>${selectedPrice}</h3>`
}