import basic from '../images/subscriptions/basic.png';
import pro from '../images/subscriptions/pro.png';
import enterprise from '../images/subscriptions/enterprise.png';

export const subscriptions = [{
    id: 1, icon: basic, type: { nameEn: 'Basic', nameRu: 'Базовый', nameKk: 'Бастауыш' }, clientType: { nameEn: 'For individuals', nameRu: 'Для индивидуалов', nameKk: 'Жеке тұлғалар үшін' }, desc: 'Lorem ipsum dolor sit amet doloroli sitiol conse ctetur adipiscing elit. ', price: { en: '$99', ru: '7900₽', kk: '43500₸' }, profits: {
        nameEn: [
            'All analytics features', 'Up to 250,000 tracked visits', 'Normal support', 'Up to 3 team members'
        ], nameRu: ['Все функции аналитики', 'До 250 000 отслеживаемых посещений', 'Обычная поддержка', 'До 3 членов команды'], nameKk: ['Барлық талдау мүмкіндіктері', '250 000 бақыланатын кіруге дейін', 'Қалыпты қолдау', '3 топ мүшесіне дейін']
    }
},
{
    id: 2, icon: pro, type: { nameEn: 'Pro', nameRu: 'Про', nameKk: 'Про' }, clientType: { nameEn: 'For startups', nameRu: 'Для стартапов', nameKk: 'Стартаптар үшін' }, desc: 'Lorem ipsum dolor sit amet doloroli sitiol conse ctetur adipiscing elit. ', price: { en: '$199', ru: '15900₽', kk: '88000₸' }, profits: {
        nameEn: [
            'All analytics features', 'Up to 1,000,000 tracked visits', 'Premium support', 'Up to 10 team members'
        ], nameRu: ['Все функции аналитики', 'До 1 000 000 отслеживаемых посещений', 'Премиум-поддержка', 'До 10 членов команды'], nameKk: ['Барлық аналитикалық мүмкіндіктер', '1 000 000 бақыланатын кіруге дейін', 'Премиум қолдау', '10 топ мүшесіне дейін']
    }
}, {
    id: 3, icon: enterprise, type: { nameEn: 'Enterprise', nameRu: 'Предприятие', nameKk: 'Кәсіпорын' }, clientType: { nameEn: 'For big companies', nameRu: 'Для больших компаний', nameKk: 'Үлкен компаниялар үшін' }, desc: 'Lorem ipsum dolor sit amet doloroli sitiol conse ctetur adipiscing elit. ', price: { en: '$399', ru: '31885₽', kk: '176550₸' }, profits: {
        nameEn: [
            'All analytics features', 'Up to 5,000,000 tracked visits', 'Dedicated support', 'Up to 50 team members'
        ], nameRu: ['Все функции аналитики', 'До 5 000 000 отслеживаемых посещений', 'Специальная поддержка', 'До 50 членов команды'], nameKk: ['Барлық аналитикалық мүмкіндіктер', '5 000 000 бақыланатын кіруге дейін', 'Арнайы қолдау', '50 топ мүшесіне дейін']
    }
}]