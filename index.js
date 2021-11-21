const getUser = async () => {
  try {
    const res = await fetch ('http//vk.com')
    const data = await res.json ()
  }
  catch(E) {
    console.log(e)
  }
}

getUser()