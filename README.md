<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Centro Cultural Carro de Boi do Dário</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: Arial, sans-serif;
        }

        body {
            background-color: #f3f3f3;
            color: #333;
        }

        header {
            background-color: #ff6600;
            color: white;
            padding: 1rem;
            text-align: center;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }

        header h1 {
            font-size: 2.5rem;
        }

        nav {
            text-align: center;
            margin: 1rem 0;
        }

        nav a {
            text-decoration: none;
            color: #ff6600;
            font-weight: bold;
            margin: 0 1rem;
            padding: 0.5rem;
        }

        nav a:hover {
            color: #333;
        }

        .container {
            width: 90%;
            max-width: 1200px;
            margin: 0 auto;
            padding: 2rem 0;
        }

        section {
            margin-bottom: 2rem;
        }

        h2 {
            color: #ff6600;
            margin-bottom: 1rem;
            font-size: 1.75rem;
            text-align: center;
        }

        p {
            line-height: 1.6;
            text-align: center;
        }

        .contact-info {
            text-align: center;
            background-color: #ff6600;
            color: white;
            padding: 1rem;
            border-radius: 8px;
            margin-top: 2rem;
        }

        .activity-table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 1rem;
        }

        .activity-table, .activity-table th, .activity-table td {
            border: 1px solid #ddd;
        }

        .activity-table th, .activity-table td {
            padding: 1rem;
            text-align: center;
        }

        .activity-table th {
            background-color: #ff6600;
            color: white;
        }

        footer {
            background-color: #333;
            color: white;
            padding: 1rem;
            text-align: center;
            margin-top: 2rem;
        }
    </style>
</head>
<body>

    <header>
        <h1>Centro Cultural Carro de Boi do Dário</h1>
        <p>Promovendo a Cultura e Tradições Regionais</p>
    </header>

    <nav>
        <a href="#descricao">Descrição</a>
        <a href="#atividades">Atividades Oferecidas</a>
        <a href="#contato">Contato</a>
    </nav>

    <div class="container">
        <section id="descricao">
            <h2>Descrição</h2>
            <p>O Centro Cultural Carro de Boi do Dário é um espaço dedicado à promoção da cultura e das tradições regionais em Florianópolis, destacando atividades como o boi de mamão e a capoeira. Este projeto visa proporcionar um ambiente acolhedor para a comunidade participar de diversas atividades culturais e esportivas.</p>
        </section>

        <section id="atividades">
            <h2>Atividades Oferecidas</h2>
            <table class="activity-table">
                <thead>
                    <tr>
                        <th>Dia</th>
                        <th>Atividade</th>
                        <th>Horário</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Segunda</td>
                        <td>Jiu-Jitsu</td>
                        <td>18:30 - 19:30</td>
                    </tr>
                    <tr>
                        <td>Terça</td>
                        <td>Taekwondo</td>
                        <td>9:00 - 10:30 e 15:00 - 16:30</td>
                    </tr>
                    <tr>
                        <td>Terça</td>
                        <td>Capoeira</td>
                        <td>20:00 - 22:00</td>
                    </tr>
                    <tr>
                        <td>Quarta</td>
                        <td>Melhor Idade</td>
                        <td>13:30 - 17:00</td>
                    </tr>
                    <tr>
                        <td>Quarta</td>
                        <td>Jiu-Jitsu</td>
                        <td>18:30 - 19:30</td>
                    </tr>
                    <tr>
                        <td>Quinta</td>
                        <td>Taekwondo</td>
                        <td>9:00 - 10:30 e 15:00 - 16:30</td>
                    </tr>
                    <tr>
                        <td>Quinta</td>
                        <td>Capoeira</td>
                        <td>20:00 - 22:00</td>
                    </tr>
                    <tr>
                        <td>Sábado</td>
                        <td>Boi de Mamão</td>
                        <td>9:00 - 12:00</td>
                    </tr>
                </tbody>
            </table>
        </section>

        <section id="contato">
            <h2>Contato</h2>
            <div class="contact-info">
                <p>Endereço: Rod. João Gualberto Soares, 4360 - Ingleses do Rio Vermelho, Florianópolis - SC, 88060-000</p>
                <p>Telefone: (48) 99932-3570</p>
                <p>Instagram: <a href="https://www.instagram.com/centroculturalcarrodeboidodari/" style="color: white; text-decoration: underline;">@centroculturalcarrodeboidodari</a></p>
            </div>
        </section>
    </div>

    <footer>
        &copy; 2024 Centro Cultural Carro de Boi do Dário
    </footer>

</body>
</html>
