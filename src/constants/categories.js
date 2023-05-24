import marketing from '../images/marketing.svg';
import business from '../images/business.svg';
import customer from '../images/customer.svg';
import design from '../images/design.svg';
import finance from '../images/finance.svg';
import government from '../images/government.svg';
import pm from '../images/project-management.svg';
import hr from '../images/human-research.svg';

const categoryDescEn = '100 Jobs Available';
const categoryDescKk = '100 жұмыс қол жетімді';
const categoryDescRu = '100 доступных вакансий';

export const categories = [
    { id: 1, categoryName: { nameEn: 'Marketing & Communication', nameKk: 'Маркетинг және коммуникация', nameRu: 'Маркетинговые коммуникации' }, categoryDesc: { nameRu: categoryDescRu, nameEn: categoryDescEn, nameKk: categoryDescKk }, icon: marketing },
    { id: 2, categoryName: { nameEn: 'Design & Development', nameKk: 'Әрлем мен дамыту', nameRu: 'Дизайн и развитие' }, categoryDesc: { nameRu: categoryDescRu, nameEn: categoryDescEn, nameKk: categoryDescKk }, icon: design },
    { id: 3, categoryName: { nameEn: 'Human Research & Development', nameKk: 'Адамды зерттеу және дамыту', nameRu: 'Исследования и разработки человека' }, categoryDesc: { nameRu: categoryDescRu, nameEn: categoryDescEn, nameKk: categoryDescKk }, icon: hr },
    { id: 4, categoryName: { nameEn: 'Finance Management', nameKk: 'Қаржылық басқару', nameRu: 'Управление финансами' }, categoryDesc: { nameRu: categoryDescRu, nameEn: categoryDescEn, nameKk: categoryDescKk }, icon: finance },
    { id: 5, categoryName: { nameEn: 'Government Jobs', nameKk: 'Мемлекеттік жұмыс орындары', nameRu: 'Государственные вакансии' }, categoryDesc: { nameRu: categoryDescRu, nameEn: categoryDescEn, nameKk: categoryDescKk }, icon: government },
    { id: 6, categoryName: { nameEn: 'Business Consulting', nameKk: 'Бизнес-консалтинг', nameRu: 'Бизнес-консультирование' }, categoryDesc: { nameRu: categoryDescRu, nameEn: categoryDescEn, nameKk: categoryDescKk }, icon: business },
    { id: 7, categoryName: { nameEn: 'Customer Support Care', nameKk: 'Тұтынушыларды қолдау қызметі', nameRu: 'Служба поддержки клиентов' }, categoryDesc: { nameRu: categoryDescRu, nameEn: categoryDescEn, nameKk: categoryDescKk }, icon: customer },
    { id: 8, categoryName: { nameEn: 'Project Management', nameKk: 'Жобаны басқару', nameRu: 'Управление проектом' }, categoryDesc: { nameRu: categoryDescRu, nameEn: categoryDescEn, nameKk: categoryDescKk }, icon: pm },
]