export const boxVariants = {
    checked: {
      backgroundColor: 'rgba(242, 198, 122, 1)',
    },
    unchecked: {
      backgroundColor: 'rgba(242, 198, 122, 0)',
      border: '2px #F2C67A solid',
    }
}

export const checkVariants = {
    initial: {
      stroke:  'rgba(255, 255, 255, 0)'
    },
    checked: {
      pathLength: 1,
      stroke:  'rgba(255, 255, 255, 1)',
      transition: {duration: 0.2}
      
    },
    unchecked: {
      pathLength: 0,
      stroke:  'rgba(255, 255, 255, 0)',
      transition: {duration: 0.2}
    }
}

export const shakeBtn = {
    hover: {
        rotate: 0
    }
}

export const shakeImg = {
    hover: {
        rotate: 90
    },
    initial: {
        rotate: 0
    }
}

export let months = ['Январь', 'Февраль', 'Март', 
'Апрель', 'Май', 'Июнь', 'Июль', 
'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];

export let weekdays =["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];