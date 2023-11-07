import { w3cwebsocket as W3CWebSocket } from 'websocket';

export class WebsocketService {
    client;

    constructor(onOpen, onMessage, onError) {
        this.client = new W3CWebSocket('ws://localhost:3001/ws');

        this.client.onopen = () => {
            console.log('WebSocket Client Connected');
            onOpen();
        };
        
        this.client.onmessage = (message) => {
            console.log(message);
            onMessage(message);
        };
        this.client.onerror = function(error) {
            console.log('Connection Error');
            onError(error);
        };
    }
}

