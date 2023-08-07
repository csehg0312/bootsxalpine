async function getLabel() {
    let response = await fetch('/api/label')
 
    return await response.text()
}