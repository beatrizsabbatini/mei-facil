import Certificate from '../assets/badge-with-a-star.png';
import BillOfExchange from '../assets/barcode.png';
import CrownChatBulb from '../assets/bulb.png';
import Clipboard from '../assets/clipboard.png';
import CreditCardMachine from '../assets/credit-card-machine.png';
import CreditCard from '../assets/credit-card.png';
import DAS from '../assets/das.png';
import DollarSign from '../assets/dollarSign.png';
import ExclamationMark from '../assets/exclamation.png';
import Heart from '../assets/heart.png';
import Info from '../assets/info.png';
import Questions from '../assets/information.png';
import Invoice from '../assets/invoice.png';
import Logout from '../assets/logout.png';
import NF from '../assets/nf.png';
import TV from '../assets/tv.png';
import UserBox from '../assets/user-box.png';
import UserPaper from '../assets/userPaper.png';
import WhatsApp from '../assets/whatsapp.png';
import { statuses } from './constants';

export const exclusiveContentData = [
	{
		categoryId: 0,
		categoryName: 'TV MEI Fácil',
		imgPath: TV,
	},
	{
		categoryId: 1,
		categoryName: 'Perguntas Frequentes',
		imgPath: Questions,
	},
	{
		categoryId: 2,
		categoryName: 'Zap do MEI',
		imgPath: WhatsApp,
	},
	{
		categoryId: 3,
		categoryName: 'Indique esse app',
		imgPath: Heart,
	},
];

export const meiData = [
	{
		categoryId: 0,
		categoryName: 'Pagar imposto DAS',
		imgPath: DAS,
	},
	{
		categoryId: 1,
		categoryName: 'Emitir Recibo',
		imgPath: Invoice,
	},
	{
		categoryId: 2,
		categoryName: 'Emitir nota fiscal',
		imgPath: NF,
	},
	{
		categoryId: 3,
		categoryName: 'Contabilidade MEI Fácil',
		imgPath: CrownChatBulb,
	},
	{
		categoryId: 4,
		categoryName: 'Declaração Anual',
		imgPath: DollarSign,
	},
	{
		categoryId: 5,
		categoryName: 'Certificado do MEI',
		imgPath: Certificate,
	},
	{
		categoryId: 6,
		categoryName: 'Alterar dados do MEI',
		imgPath: UserPaper,
	},
];

export const receiveFromClientsData = [
	{
		categoryId: 0,
		categoryName: 'Maquininha de Cartão',
		imgPath: CreditCardMachine,
	},
	{
		categoryId: 1,
		categoryName: 'Maquininha de Cartão',
		imgPath: BillOfExchange,
	},
];

export const blogData = [
	{
		id: 0,
		title: 'O que é DAS?',
		text:
      'O DAS é o imposto obrigatório que o MEI deve pagar, tem valor de aproximadamente R$50,00',
		url: 'https://blog.meifacil.com/obrigacoes-do-mei/como-emitir-das-mei/',
	},
	{
		id: 1,
		title: 'Declaração Anual',
		text:
      'A Declaração MEI ou DASN-SIMEI é a "Declaração Anual do Simples Nacional do MEI". Ela é a declaração do faturamento da empresa no ano',
		url:
      'https://blog.meifacil.com/obrigacoes-do-mei/como-alterar-minha-declaracao-mei/',
	},
	{
		id: 2,
		title: 'Controle Financeiro',
		text:
      'Por ser dono do seu próprio negócio, o MEI que sabe administrar seus ganhos e despesas está sempre a um passo',
		url:
      'https://blog.meifacil.com/financas/planilha-de-controle-financeiro-mei/',
	},
	{
		id: 3,
		title: 'Como e quanto cobrar?',
		text:
      'Leve em consideração o quanto os concorrentes cobram e quanto seus clientes estão dispostoos a pagar pelo seu produto ou sserviço',
		url:
      'https://blog.meifacil.com/financas/como-precificar-um-produto-ou-servico/#:~:text=Como%20precificar%20um%20produto%3A%20a%20MEI%20Fácil%20te%20ensina!&text=Isso%20é%20feito%20somando-se,você%2C%20para%20fazer%20a%20comparação.',
	},
	{
		id: 4,
		title: 'Maquininha',
		text:
      'Qual máquina de cartão é a melhor? Há várias opções no mercado, mas sua escolha deve se adequar ao seu bolso e ao seu tipo de negócio.',
		url:
      'https://blog.meifacil.com/financas/maquina-de-cartao-o-que-considerar/',
	},
];

export const notificationsData = [
	{
		id: 0,
		title: 'Os tipos de cliente digitais',
		description:
      'Toque aqui, descubra os tipos de clientes da internet e como ganhar dinheiro com cada um deles.',
		imgPath: ExclamationMark,
		date: '17 set',
	},
	{
		id: 1,
		title: 'Live: Conheça o Pix',
		description:
      'Nessa sexta, 17h, estaremos AO VIVO no YouTube para tirar suas dúvidas sobre o Pix, uma nova forma de receber.',
		imgPath: ExclamationMark,
		date: '11 set',
	},
	{
		id: 2,
		title: 'Receba dinheiro devolta',
		description:
      'Toque e conheça o Pix, um novo jeito de receber dinheiro em segundos, qualquer dia do ano!',
		imgPath: ExclamationMark,
		date: '09 set',
	},
	{
		id: 3,
		title: 'Maquininha com 1% de taxa',
		description:
      'Isso mesmo, 1% no débito e crédito nos primeiros 3 meses. E mesmo depois, você continua com as menores taxas do mercado. Confira aqui!',
		imgPath: CreditCard,
		date: '11 set',
	},
	{
		id: 4,
		title: 'Precisa de máquina de cartão?',
		description:
      'Isso mesmo, 1% no débito e crédito nos primeiros 3 meses. E mesmo depois, você continua com as menores taxas do mercado. Confira aqui!',
		imgPath: CreditCard,
		date: '11 set',
	},
	{
		id: 5,
		title: 'Live: Conheça o Pix',
		description:
      'Nessa sexta, 17h, estaremos AO VIVO no YouTube para tirar suas dúvidas sobre o Pix, uma nova forma de receber.',
		imgPath: ExclamationMark,
		date: '11 set',
	},
];

export const profileButtonsData = [
	{
		id: 0,
		title: 'Dados Pessoais',
		navigateTo: 'HomeScreen',
		imgPath: UserBox,
	},
	{
		id: 1,
		title: 'Dados da Empresa',
		navigateTo: 'HomeScreen',
		imgPath: Clipboard,
	},
	{
		id: 2,
		title: 'Informações Gerais',
		navigateTo: 'HomeScreen',
		imgPath: Info,
	},
	{ id: 3, title: 'Sair do Aplicativo', navigateTo: 'Login', imgPath: Logout },
];

export const taxesData = [
	{
		id: 0,
		status : statuses.NOT_OPTING,
		date: "21/01/2020",
		monthAndYear: "Janeiro 2020",
	  hideLine: true
	},
	{
		id: 1,
		status : statuses.NOT_OPTING,
		date: "21/02/2020",
		monthAndYear: "Fevereiro 2020",
	  hideLine: true
	},
	{
		id: 2,
		status : statuses.NOT_OPTING,
		date: "21/03/2020",
		monthAndYear: "Março 2020",
	  hideLine: true
	},
	{
		id: 3,
		status : statuses.NOT_OPTING,
		date: "21/04/2020",
		monthAndYear: "Abril 2020",
	  hideLine: true
	},
	{
		id: 4,
		status : statuses.NOT_OPTING,
		date: "21/05/2020",
		monthAndYear: "Maio 2020",
	  hideLine: true
	},
	{
		id: 5,
		status : statuses.NOT_OPTING,
		date: "21/06/2020",
		monthAndYear: "Junho 2020",
	  hideLine: true
	},
	{
		id: 6,
		status : statuses.NOT_OPTING,
		date: "21/07/2020",
		monthAndYear: "Julho 2020",
	  hideLine: true
	},
	{
		id: 7,
		status : statuses.PAID,
		date: "21/08/2020",
		monthAndYear: "Agosto 2020",
	  hideLine: true
	},
	{
		id: 8,
		status : statuses.OPEN,
		date: "21/08/2020",
		monthAndYear: "Setembro 2020",
	  hideLine: true
	},
]