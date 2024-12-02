function changeMap(location) {
  const map = document.getElementById("location-map");
  const locations = {
    shchelyaiur:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11830.438262571152!2d53.38452347792844!3d65.32863950204027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x43dc7c2b7ae8425f%3A0xa9c62b56769c4f23!2sShchel&#39;yaiur%2C%20Komi%20Republic%2C%20Russia!5e0!3m2!1sen!2sus!4v1732345678901!5m2!1sen!2sus",
    vertep:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10000.000000000001!2d52.000000000001!3d65.000000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sVertep!5e0!3m2!1suz!2s!4v1732334528413!5m2!1suz!2s",
    krasnobor:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9000.000000000001!2d51.000000000001!3d64.000000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sKrasnobor!5e0!3m2!1suz!2s!4v1732334528413!5m2!1suz!2s",
    diyur:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11000.000000000001!2d50.000000000001!3d63.000000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sDiyur!5e0!3m2!1suz!2s!4v1732334528413!5m2!1suz!2s",
  };
  map.src = locations[location];
}
