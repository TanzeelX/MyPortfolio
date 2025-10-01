import { Component } from '@angular/core';
import { Navbar } from '../navbar/navbar';
import { Hero } from '../hero/hero';
import { About } from '../about/about';
import { Portfolio } from '../portfolio/portfolio';
import { Certificates } from '../certificates/certificates';
import { Services } from '../services/services';
import { Footer } from '../footer/footer';


@Component({
  selector: 'app-landingpage',
  imports: [Navbar, Hero, About, Portfolio, Certificates,Services, Footer],
  templateUrl: './landingpage.html',
  styleUrl: './landingpage.css'
})
export class Landingpage {

}
