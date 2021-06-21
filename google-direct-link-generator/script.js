// UI Variables
const glink = document.getElementById('glink')
const btn = document.getElementById('btn')
const downloadLink = document.getElementById('download-link')
const copyLink = document.querySelector('.copy-link')
const copyAudio = document.querySelector('.copy-audio')
const copyVideo = document.querySelector('.copy-video')
const embedAudio = document.getElementById('embed-mp3')
const embedVideo = document.getElementById('embed-video')

// Get download link
const generateLink = (e) => {
  e.preventDefault()

  const glinkValue = glink.value
  const confirmLink = glink.value.includes('https://drive.google.com/file/d/')
  
  if (confirmLink) {
    const getDownloadLink = glinkValue
    .replace("https://drive.google.com/file/d/", "https://drive.google.com/uc?export=download&id=")
    .replace("/view?usp=sharing", "")
    downloadLink.value = getDownloadLink

    // Get Direct Download Link
    const copyText = (target, getLinkBtn) => {
      if (target.value === '') {
        alert('Please generate a download link')
      } else {
        target.select()
        target.setSelectionRange(0, 9999999)
        document.execCommand('copy')
        alert('Link copied to clipboard')
        getLinkBtn.textContent = 'Link Copied!'
        getLinkBtn.style.backgroundColor = '#2E294E'
        setTimeout(() => {
          getLinkBtn.textContent = 'Copy'
          getLinkBtn.style.backgroundColor = '#F46036'
        }, 3000);
      }
    }

    copyLink.addEventListener('click', () => {
      return copyText(downloadLink, copyLink)
    })

    // Embed Audio
    const audio1 = `<audio width="300" height="32" controls="controls" src="`
    const audio2 = `" type="audio/mp3"></audio>`

    // Copy Audio Embed Code
    embedAudio.value = `${audio1}${downloadLink.value}${audio2}`
    copyAudio.addEventListener('click', () => {
      return copyText(embedAudio, copyAudio)
    })

    // Embed Video
    const getVideoLink = glink.value.replace("/view?usp=sharing", "")
    const video1 = `<iframe src=""`
    const video2 = `/preview" width="560" height="315">`
    embedVideo.value = `${video1}${getVideoLink}${video2}`
    
    copyVideo.addEventListener('click', () => {
      return copyText(embedVideo, copyVideo)
    })
  } else {
    alert('Please enter a valid Google Drive File link')
  }
 
}

btn.addEventListener('click', generateLink) 








