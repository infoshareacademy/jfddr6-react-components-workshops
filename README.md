# jfddr6-react-components-workshops

1. Stwórz aplikacje react za pomocą create-react-app
2. Usuń niepotrzebny boilerplate
3. Na tym etapie powinieneś mieć aplikacje składającą sie z App.js index.css i intex.js
4. Stwórz dwa osobne komponenty Left i Right
   a - Nadaj lewemu 2x state. Pierwszy będzie tablicą pór roku i wyświetl go w pionowym ustawieniu jeżeli drugi nadany state w tym komponencie będzie === true 
   b - Nadaj prawemu 2x state. pierwszy będzie obiektem z właściwościami num1 i num2 i bedą to obojętne jakie liczby od 0 do 9. Wyświetlimy tu wynik funkcji a + b liczb ze stateu, z 3 sec opóźnieniem, tylko jeżeli drugi state będzie === true
5.(dodatkowe) - wyniki operacji na stanie przekaż nowo stworzonym komponentom i wyświetl go w nich.
6. Stwórz kolejny komponent będący footerem aplikacji i umieść go pod wcześniejszymi dwoma.
   a - Stwórz state który bedzie tablicą obiektów o jednej właściwości author, która bedzie stringiem. Przeiteruj po state i wyświetl wynik funkcji łączącej ten string z każdego biektu z losowym wyrazem tak aby powstało zdanie np: [{name: "Ania"}] => 'Ania is soooo coool' (tutaj dodaliśmy "soooo coooool" do każdej właściwości name z obiektów w naszej tablicy
