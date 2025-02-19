<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>APP SGE | Hermandad Sagrada Lanzada - Login</title>
  <link rel="stylesheet" href="estilologin.css">
</head>
<body>
  <div class="container">
    <!-- Mitad izquierda: muestra el texto en párrafos -->
    <div class="left-half">
      <p>APP SGE</p>
      <p>HERMANDAD SAGRADA</p>
      <p>LANZADA</p>
    </div>
    <!-- Mitad derecha: formulario de login -->
    <div class="right-half">
      <div id="formlogin">
        
        <!-- Descripción del login -->
        <p class="login-desc">
         
          Para obtener las credenciales de acceso, póngase en contacto con el Mayordomo de la hermandad.
          Esta aplicación solo está disponible para fines de gestión de la hermandad.
        </p>
        <form method="post" action="login.php">
          <!-- Agregamos id a los inputs para que el JS los encuentre -->
          <input type="text" id="usuario" name="usuario" placeholder="Usuario" required>
          <input type="password" id="contrasena" name="password" placeholder="Contraseña" required>
          <!-- Cambiamos el botón para que tenga id="login" y type="button" (evitando que se envíe el formulario antes de tiempo) -->
          <button type="button" id="login">Login</button>
        </form>
        <!-- Elementos para feedback y mensajes -->
        <div id="feedback"></div>
        <div id="toast"></div>
      </div>
    </div>
  </div>
  <script src="login.js"></script>
</body>
</html>
