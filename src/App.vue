<template>
  <div id="app">
    <div id="nav" class="sidenav">
      <router-link to="/"><i class="fas fa-home"></i></router-link>
      <router-link to="/favorites"><i class="far fa-star"></i></router-link>
    </div>
    <div class="main">
      <router-view />
      <footer class="footer">
        <div class="container">
          <a class="text-muted" href="https://github.com/kbrady1/creative-proj-3" target="_blank">GitHub Repository</a>
        </div>
      </footer>
    </div>
  </div>
</template>

<style>
footer {
  position: fixed;
  bottom: 0px;
  left: 200px;
  right: 0px;
  padding: 4px;
  background-color: #ddd;
}
html, body {
  height: 100%;
  margin: 0;
  padding: 0;
  background-color: #eee;
}

h1 {
  font-size: 4em;
}
#app {
  font-family: 'Sen', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #eee;
  height: 100%;
}

.sidenav {
  height: 100%;
  width: 200px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #2c3e50;
  overflow-x: hidden;
  padding-top: 20px;
}

.sidenav a {
  padding: 16px 8px 6px 16px;
  text-decoration: none;
  font-size: 6em;
  color: #818181;
  display: block;
}

.sidenav a:hover {
  color: #f1f1f1;
}

.main {
  margin-left: 200px;
  padding: 0px 10px;
  background-color: #eee;
}

@media screen and (max-height: 450px) {
  .sidenav {padding-top: 15px;}
  .sidenav a {font-size: 3em;}
}
</style>
