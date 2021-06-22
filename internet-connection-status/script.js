// const mainBody = document.getElementById('main')
// const statusDisplay = document.getElementById('status')

// window.addEventListener('load', (e) => {
//   statusDisplay.textContent = navigator.onLine ? 'Your Internet status is currently Online' : "Your internet status is currently Offline"
//   navigator.onLine ? `${mainBody.style.backgroundColor = 'green'}` : `${mainBody.style.backgroundColor = 'red'}`
// })

const image = document.getElementById('image')
const statusDisplay = document.getElementById('status')
const bgColor = document.getElementById('main')

const setBgColor = () => {
  bgColor.classList.add('online')
}

const connectionStatus = async () => {
  try {
    const fetchResult = await fetch('https://upload.wikimedia.org/wikipedia/en/thumb/7/7d/Lenna_%28test_image%29.png/440px-Lenna_%28test_image%29.png?time=' + (new Date().getTime()))
    image.src = "./images/online.png"
    setBgColor()
    return fetchResult.status >= 200 && fetchResult.status < 300
  } catch (error) {
    console.log(error)
    image.src = "./images/offline.png"
    statusDisplay.textContent = "Ooops! your internet connection is down"
    bgColor.classList.add('offline')
  }
}

// Monitor the connection
setTimeout(async () => {
  const result = await connectionStatus()
  if (result) {
    statusDisplay.textContent = `You are ONLINE, Internet is connected`
    setBgColor()
  } else {
    statusDisplay.textContent = `You are OFFLINE, Internet is disconnected`
  }
}, 3000)

// Check Connection when page loads
window.addEventListener('load', async (e) => {
  if (connectionStatus()) {
    statusDisplay.textContent = "You are ONLINE"
  } else {
    statusDisplay.textContent = "You are OFFLINE"
  }
})