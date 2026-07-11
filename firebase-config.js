/* ============================================================
   ArhiLink — configurare Firebase (același proiect ca FamLink)
   ------------------------------------------------------------
   Aceste valori NU sunt secrete: cheile web Firebase sunt publice
   prin design (securitatea vine din regulile Firestore + secretul
   de pe backend, nu din ele).

   Proiectul e ACELAȘI cu FamLink (famlink-push) — un singur backend
   servește ambele aplicații; separarea se face prin câmpul `app`
   trimis de fiecare aplicație la înregistrare.

   Acest fișier e folosit ȘI de pagină, ȘI de service worker
   (firebase-messaging-sw.js) — deci îl editezi O SINGURĂ DATĂ.
   ============================================================ */
var FB_CONFIG = {
  apiKey: "AIzaSyAv-4EPR67KlBSbx9pPPmjLwt6WycfEc88",
  authDomain: "famlink-push.firebaseapp.com",
  projectId: "famlink-push",
  storageBucket: "famlink-push.firebasestorage.app",
  messagingSenderId: "565488951571",
  appId: "1:565488951571:web:6a62becd51b990cac7bae6"
};

var FB_VAPID = "BNfgABAHDbTr200i64UwnNM2mP3Y6yl9RD8SmIZT88rdqwjMwgq7RP1JnsNyiivWPvlD5AdDUYhff5znvMcKk4U";

/* nu modifica mai jos — expune valorile și în service worker */
if (typeof self !== 'undefined') { self.FB_CONFIG = FB_CONFIG; self.FB_VAPID = FB_VAPID; }
