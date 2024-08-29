// Placeholder to host a component

const Hours = () => {
    const openingHours = {
        weekdays: '10 a.m. - 4 p.m.',
        weekends: '9 a.m. - 8 p.m.'
    };

    const currentDate = new Date();
    const currentDay = currentDate.toLocaleString('es-ES', { weekday: 'long' });

    return (
        <div>
            <p>Hola hoy es {currentDay} el horario de atención es de {openingHours.weekdays} ten un buen día 😉</p>
        </div>
    );
};

export default Hours;
