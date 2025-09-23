import { Component, OnInit } from '@angular/core';
import { GeneroLiterario, Livro } from '../livro/livro';
import { livros } from '../../mock-livros';
import { GeneroLiterarioComponent } from '../genero-literario/genero-literario.component';

@Component({
  selector: 'app-lista-livros',
  imports: [GeneroLiterarioComponent],
  templateUrl: './lista-livros.component.html',
  styleUrl: './lista-livros.component.css'
})
export class ListaLivrosComponent implements OnInit{
  generos: GeneroLiterario[] = [];
  livrosPorGenero: Map<string, Livro[]> = new Map();

  ngOnInit() {
    this.livrosPorGenero = new Map();

    livros.forEach((livro) => {
      const generoId = livro.genero.id
      if(!this.livrosPorGenero.has(generoId)) {
        this.livrosPorGenero.set(generoId, [])
      }
      this.livrosPorGenero.get(generoId)?.push(livro)
    })

    this.generos = [
      {
        id: 'romance',
        value: "Romance",
        livros: this.livrosPorGenero.get("romance") ?? []
      },
      { 
        id: 'drama', 
        value: 'Drama', 
        livros: this.livrosPorGenero.get("drama") ?? [] 
      },
      { 
        id: 'shounen', 
        value: 'Shounen', 
        livros: this.livrosPorGenero.get("shounen") ?? [] 
      },
      { 
        id: 'ficcao-cientifica', 
        value: 'Ficção Científica', 
        livros: this.livrosPorGenero.get("ficcao-cientifica") ?? [] 
      },
      { 
        id: 'tecnicos', 
        value: 'Técnicos', 
        livros: this.livrosPorGenero.get("tecnicos") ?? [] 
      }
  
    ]

    console.log(this.livrosPorGenero)
  }
  

}