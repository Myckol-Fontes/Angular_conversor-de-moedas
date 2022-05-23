import {
	Component, Input, Output, EventEmitter, OnInit
} from '@angular/core';

import { ConversaoResponse, Conversao } from '../models/';
import { ConversorService } from '../services';

@Component({
  selector: 'modal-cotacao',
  templateUrl: './modal-cotacao.component.html',
  styleUrls: ['./modal-cotacao.component.css']
})
export class ModalCotacaoComponent implements OnInit {

	@Input() id: string;
	@Input() conversaoResponse: ConversaoResponse;
	@Input() conversao: Conversao = new Conversao();
	@Output() onConfirm: EventEmitter<any> = new EventEmitter<any>();

	constructor(private conversorService: ConversorService) {}

	ngOnInit() {
  	}


}
