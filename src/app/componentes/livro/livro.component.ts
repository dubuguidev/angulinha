import { Component } from '@angular/core';
import { Livro } from './livro';

@Component({
  selector: 'app-livro',
  imports: [],
  templateUrl: './livro.component.html',
  styleUrl: './livro.component.css'
})
export class LivroComponent {

  alternarFavorito() {
    this.livro.favorito =!this.livro.favorito
  }

  livro: Livro = {
    titulo: "Attack On Titan",
    autoria: "Hajime Isayama",
    favorito: false,
    genero: "Ficção",
    imagem: "https://upload.wikimedia.org/wikipedia/pt/c/c9/Shingeki_no_Kyojin_4%C2%AA_temporada.jpg"
  }
  
}
