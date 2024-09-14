<template>
    <header class="bg-blue-950 text-white p-4">
      <nav>
        <ul class="flex space-x-4">
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/savings">Savings</router-link></li>
          <li><router-link to="/goals">Goals</router-link></li>
          <li><router-link to="/account">Account</router-link></li>
        </ul>
      </nav>
    </header>
  </template>
  
  <script>
  export default {
    name: 'Header'
  }
  </script>