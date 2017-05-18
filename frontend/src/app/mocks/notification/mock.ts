import { Notification } from './notification';
import { NOTIFICATION_TYPES } from "../notification-type/mock"
import { User } from '../user/user';

var user1: User = {nickname: "safety", name: "Smart", avatar: "asd"};
var user2: User = {nickname: "test", name: "testonildo", avatar: "tes"};
var user3: User = {nickname: "wonderwoman", name: "Duda", avatar: "xcv"};

export const NOTIFICATIONS: Notification[] = [
    {type: NOTIFICATION_TYPES.acidentes, icon: "attach_file", location: "Torre 1 | Andar 1", message: "sdahfiasdhflakjsdfhaslkjdhfksljdafh\nasdadajsdhaskjdha", relator: user1, date: new Date(2016,4,1), isRead: false},
    {type: NOTIFICATION_TYPES.incidentes, icon: "attach_file", location: "Torre 1 | Andar 2", message: "Aqui 2", relator: user2, date: new Date(), isRead: true},
    {type: NOTIFICATION_TYPES.naoConformidades, icon: "true", location: "Torre 1 | Andar 3", message: "Notification 3", relator: user3, date: new Date(), isRead: false},
    {type: NOTIFICATION_TYPES.fiscalizacoes, icon: "true", location: "Torre 2 | Andar 1", message: "Notification 4", relator: user1, date: new Date(), isRead: true},
    {type: NOTIFICATION_TYPES.acidentes, icon: "false", location: "Torre 1 | Andar 1", message: "sdahfiasdhflakjsdfhaslkjdhfksljdafh\nasdadajsdhaskjdha", relator: user1, date: new Date(), isRead: false},
    {type: NOTIFICATION_TYPES.incidentes, icon: "true", location: "Torre 1 | Andar 2", message: "Notification 2", relator: user2, date: new Date(), isRead: true},
    {type: NOTIFICATION_TYPES.naoConformidades, icon: "false", location: "Torre 1 | Andar 3", message: "Notification 3", relator: user3, date: new Date(), isRead: false},
    {type: NOTIFICATION_TYPES.fiscalizacoes, icon: "true", location: "Torre 2 | Andar 1", message: "Notification 4", relator: user1, date: new Date(), isRead: true},
    {type: NOTIFICATION_TYPES.acidentes, icon: "false", location: "Torre 1 | Andar 1", message: "sdahfiasdhflakjsdfhaslkjdhfksljdafh\nasdadajsdhaskjdha", relator: user1, date: new Date(), isRead: false},
    {type: NOTIFICATION_TYPES.incidentes, icon: "true", location: "Torre 1 | Andar 2", message: "Notification 2", relator: user2, date: new Date(), isRead: true},
    {type: NOTIFICATION_TYPES.naoConformidades, icon: "false", location: "Torre 1 | Andar 3", message: "Notification 3", relator: user3, date: new Date(), isRead: false},
    {type: NOTIFICATION_TYPES.fiscalizacoes, icon: "true", location: "Torre 2 | Andar 1", message: "Notification 4", relator: user1, date: new Date(), isRead: true},
];
