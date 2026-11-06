 
function wypisz(tekst) {
    document.write(tekst + "<br />");
  }
 
  // ---------------------------------------------------------------
  // ZADANIE 1
  // ---------------------------------------------------------------
  function zadanie1() {
    var tab1 = [7, 3, 1, 6, 9, 5, 4, 10, 2, 2];
    var i;
 
    // 1.1 5. komórka ma indeks 4, 7. komórka ma indeks 6
    wypisz(tab1[4]);
    tab1[6] = 12;
 
    // 1.2 przepisanie tab1 do tab2
    var tab2 = [];
    for (i = 0; i < tab1.length; i++) {
      tab2[i] = tab1[i];
    }
 
    // 1.3 tab3 = suma komórek tab1 i tab2 o tych samych indeksach
    var tab3 = [];
    for (i = 0; i < tab1.length; i++) {
      tab3[i] = tab1[i] + tab2[i];
    }
 
    // 1.4 tab1 do tab2 w odwrotnej kolejności
    for (i = 0; i < tab1.length; i++) {
      tab2[i] = tab1[tab1.length - 1 - i];
    }
 
    wypisz("tab1: " + tab1.join(", "));
    wypisz("tab2: " + tab2.join(", "));
    wypisz("tab3: " + tab3.join(", "));
  }
 
  // ---------------------------------------------------------------
  // ZADANIE 2
  // ---------------------------------------------------------------
  function zadanie2() {
    var tablica = [];
    var i, j, n, temp;
 
    // 2.1 wypełnienie wartościami od użytkownika
    n = parseInt(prompt("Ile liczb chcesz wpisać?"));
    for (i = 0; i < n; i++) {
      tablica[i] = parseInt(prompt("Podaj liczbę nr " + (i + 1)));
    }
 
    // 2.2 najmniejszy i największy
    var min = tablica[0];
    var max = tablica[0];
    for (i = 1; i < n; i++) {
      if (tablica[i] < min) min = tablica[i];
      if (tablica[i] > max) max = tablica[i];
    }
    wypisz("Najmniejszy: " + min + ", największy: " + max);
 
    // 2.3 średnia
    var suma = 0;
    for (i = 0; i < n; i++) {
      suma += tablica[i];
    }
    wypisz("Średnia: " + suma / n);
 
    // 2.4 ilość wystąpień cyfry 3 (liczymy cyfry w zapisie każdej liczby)
    var trojki = 0;
    for (i = 0; i < n; i++) {
      var napis = String(Math.abs(tablica[i]));
      for (j = 0; j < napis.length; j++) {
        if (napis[j] == "3") trojki++;
      }
    }
    wypisz("Cyfra 3 występuje: " + trojki + " razy");
 
    // 2.5 sortowanie bąbelkowe rosnąco
    for (i = 0; i < n - 1; i++) {
      for (j = 0; j < n - 1 - i; j++) {
        if (tablica[j] > tablica[j + 1]) {
          temp = tablica[j];
          tablica[j] = tablica[j + 1];
          tablica[j + 1] = temp;
        }
      }
    }
    wypisz("Posortowana: " + tablica.join(", "));
 
    // 2.6 mediana (tablica jest już posortowana)
    var mediana;
    if (n % 2 == 1) {
      mediana = tablica[(n - 1) / 2];
    } else {
      mediana = (tablica[n / 2 - 1] + tablica[n / 2]) / 2;
    }
    wypisz("Mediana: " + mediana);
 
    // 2.7 trzy najmniejsze i trzy największe (tablica jest posortowana)
    var ile = Math.min(3, n);
    var najmniejsze = [];
    var najwieksze = [];
    for (i = 0; i < ile; i++) {
      najmniejsze[i] = tablica[i];
      najwieksze[i] = tablica[n - 1 - i];
    }
    wypisz("3 najmniejsze: " + najmniejsze.join(", "));
    wypisz("3 największe: " + najwieksze.join(", "));
 
    // 2.9 parzyste i nieparzyste (przed podniesieniem do kwadratu)
    var parzyste = 0;
    var nieparzyste = 0;
    // 2.10 podzielne przez 3
    var podzielne3 = 0;
    for (i = 0; i < n; i++) {
      if (tablica[i] % 2 == 0) parzyste++;
      else nieparzyste++;
      if (tablica[i] % 3 == 0) podzielne3++;
    }
    wypisz("Parzystych: " + parzyste + ", nieparzystych: " + nieparzyste);
    wypisz("Podzielnych przez 3: " + podzielne3);
 
    // 2.8 podniesienie każdego elementu do kwadratu
    for (i = 0; i < n; i++) {
      tablica[i] = tablica[i] * tablica[i];
    }
    wypisz("Kwadraty: " + tablica.join(", "));
  }
 
  // ---------------------------------------------------------------
  // ZADANIE 3
  // ---------------------------------------------------------------
  function zadanie3() {
    var tablica = [];
    var i, j, temp;
 
    // 3.1 10 liter wpisywanych po jednej
    for (i = 0; i < 10; i++) {
      tablica[i] = prompt("Podaj literę nr " + (i + 1)).charAt(0);
    }
    wypisz("Litery: " + tablica.join(" "));
 
    // 3.2 10-literowy wyraz
    var wyraz = prompt("Podaj wyraz 10-literowy");
    while (wyraz.length != 10) {
      wyraz = prompt("Wyraz musi mieć dokładnie 10 liter. Spróbuj jeszcze raz");
    }
    for (i = 0; i < 10; i++) {
      tablica[i] = wyraz.charAt(i);
    }
    wypisz("Wyraz w tablicy: " + tablica.join(" "));
 
    // 3.3 zamiana wielkich liter na małe i odwrotnie
    for (i = 0; i < 10; i++) {
      if (tablica[i] == tablica[i].toUpperCase()) {
        tablica[i] = tablica[i].toLowerCase();
      } else {
        tablica[i] = tablica[i].toUpperCase();
      }
    }
    wypisz("Po zamianie wielkości: " + tablica.join(" "));
 
    // 3.4 losowa kolejność (tasowanie Fishera-Yatesa na kopii)
    var kopia = [];
    for (i = 0; i < 10; i++) {
      kopia[i] = tablica[i];
    }
    for (i = kopia.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      temp = kopia[i];
      kopia[i] = kopia[j];
      kopia[j] = temp;
    }
    wypisz("W losowej kolejności: " + kopia.join(" "));
  }
 
  // ---------------------------------------------------------------
  // ZADANIE 4
  // ---------------------------------------------------------------
  function zadanie4() {
    var A = [];
    var i, j, temp;
 
    // losowe liczby całkowite 1-100
    for (i = 0; i < 100; i++) {
      A[i] = Math.floor(Math.random() * 100) + 1;
    }
    wypisz("Tablica A: " + A.join(", "));
 
    // 4.1 największa i ile razy występuje
    var max = A[0];
    for (i = 1; i < 100; i++) {
      if (A[i] > max) max = A[i];
    }
    var ileMax = 0;
    for (i = 0; i < 100; i++) {
      if (A[i] == max) ileMax++;
    }
    wypisz("Największa: " + max + ", występuje " + ileMax + " razy");
 
    // 4.2 liczby nieparzyste
    var nieparzyste = [];
    for (i = 0; i < 100; i++) {
      if (A[i] % 2 != 0) nieparzyste.push(A[i]);
    }
    wypisz("Nieparzyste: " + nieparzyste.join(", "));
 
    // 4.3 liczby w komórkach o nieparzystych indeksach
    var nieparzysteIndeksy = [];
    for (i = 1; i < 100; i += 2) {
      nieparzysteIndeksy.push(A[i]);
    }
    wypisz("Komórki o nieparzystych indeksach: " + nieparzysteIndeksy.join(", "));
 
    // 4.4 przedział <5, 15)
    var wPrzedziale = [];
    for (i = 0; i < 100; i++) {
      if (A[i] >= 5 && A[i] < 15) wPrzedziale.push(A[i]);
    }
    wypisz("W przedziale <5, 15): " + wPrzedziale.length + " liczb: " + wPrzedziale.join(", "));
 
    // 4.5 element najbliższy wartości a
    var a = parseInt(prompt("Podaj liczbę a"));
    var najblizszy = A[0];
    for (i = 1; i < 100; i++) {
      if (Math.abs(A[i] - a) < Math.abs(najblizszy - a)) {
        najblizszy = A[i];
      }
    }
    wypisz("Najbliższy liczbie " + a + ": " + najblizszy);
 
    // 4.6 poprzednik i następnik najmniejszej wartości
    var indeksMin = 0;
    for (i = 1; i < 100; i++) {
      if (A[i] < A[indeksMin]) indeksMin = i;
    }
    wypisz("Minimum: " + A[indeksMin] + " (indeks " + indeksMin + ")");
    if (indeksMin > 0) {
      wypisz("Poprzednik: " + A[indeksMin - 1]);
    } else {
      wypisz("Poprzednik: brak (minimum jest na początku tablicy)");
    }
    if (indeksMin < 99) {
      wypisz("Następnik: " + A[indeksMin + 1]);
    } else {
      wypisz("Następnik: brak (minimum jest na końcu tablicy)");
    }
 
    // 4.7 elementy > 10 do nowej tablicy o właściwym rozmiarze
    var ileWiekszych = 0;
    for (i = 0; i < 100; i++) {
      if (A[i] > 10) ileWiekszych++;
    }
    var C = new Array(ileWiekszych);
    j = 0;
    for (i = 0; i < 100; i++) {
      if (A[i] > 10) {
        C[j] = A[i];
        j++;
      }
    }
    wypisz("Elementy > 10 (" + C.length + "): " + C.join(", "));
 
    // 4.8 B[i] = A[0] + A[1] + ... + A[i]  (sumy częściowe)
    var B = [];
    B[0] = A[0];
    for (i = 1; i < 100; i++) {
      B[i] = B[i - 1] + A[i];
    }
    wypisz("Tablica B (sumy częściowe): " + B.join(", "));
 
    // 4.10 elementy występujące przynajmniej 3 razy (robimy przed sortowaniem)
    var wypisane = [];
    for (i = 0; i < 100; i++) {
      var licznik = 0;
      for (j = 0; j < 100; j++) {
        if (A[j] == A[i]) licznik++;
      }
      if (licznik >= 3 && wypisane.indexOf(A[i]) == -1) {
        wypisane.push(A[i]);
      }
    }
    wypisz("Występują co najmniej 3 razy: " + wypisane.join(", "));
 
    // 4.9 sortowanie malejąco (bąbelkowe)
    for (i = 0; i < 99; i++) {
      for (j = 0; j < 99 - i; j++) {
        if (A[j] < A[j + 1]) {
          temp = A[j];
          A[j] = A[j + 1];
          A[j + 1] = temp;
        }
      }
    }
    wypisz("A posortowana malejąco: " + A.join(", "));
  }
 
  // ---------------------------------------------------------------
  // ZADANIE 5
  // ---------------------------------------------------------------
  function zadanie5() {
    var i;
 
    // 5.1 ciąg Fibonacciego
    var fib = new Array(100);
    fib[0] = 0;
    fib[1] = 1;
    for (i = 2; i < 100; i++) {
      fib[i] = fib[i - 1] + fib[i - 2];
    }
    wypisz("Fibonacci: " + fib.join(", "));
 
    // 5.2 potęgi liczby 2 (1, 2, 4, 8, ...)
    var potegi = new Array(100);
    potegi[0] = 1;
    for (i = 1; i < 100; i++) {
      potegi[i] = potegi[i - 1] * 2;
    }
    wypisz("Potęgi 2: " + potegi.join(", "));
 
    // 5.3 ciąg 3, 6, 9, 12, ...
    var trzy = new Array(100);
    for (i = 0; i < 100; i++) {
      trzy[i] = 3 * (i + 1);
    }
    wypisz("3, 6, 9, ...: " + trzy.join(", "));
 
    // 5.4 ciąg 2, 4, 8, 16, 32, ...
    var dwa = new Array(100);
    dwa[0] = 2;
    for (i = 1; i < 100; i++) {
      dwa[i] = dwa[i - 1] * 2;
    }
    wypisz("2, 4, 8, ...: " + dwa.join(", "));
  }
 
  zadanie1();
  zadanie2();
  zadanie3();
  zadanie4();
  zadanie5();
 