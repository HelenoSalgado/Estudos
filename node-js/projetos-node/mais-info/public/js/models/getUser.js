let getUser =  async () => {
          
      const response = await fetch ("http://localhost/bio/admin/asset/php/get-login.php")
  
      return await response.json()

}

export { getUser }