let movements = {
    // Properties

    // Methods
    init: () => {
        //
    },

    moveForward: () => {
        if (app.pacman.firstChild && app.pacman.firstChild.classList.contains('food')) {
            app.eatFood();
        }

        let newPacman;

        if (app.pacman.classList.contains('pacman-left')) {
            // Can't go out of board but can pass to the other side
            if (!app.pacman.previousSibling) {
                // find the last div of the current row
                let colNb = Object.values(app.pacman.closest('.row').lastChild.classList).find(className => className.match(/^col[0-9]+$/));
                let rowNb = app.pacman.closest('.row').id;
                newPacman = document.querySelector('#' + rowNb + ' .' + colNb);
            } else {
                newPacman = app.pacman.previousSibling;
            }
        }
        
        else if (app.pacman.classList.contains('pacman-right')) {
            // Can't go out of board but can pass to the other side
            if (!app.pacman.nextSibling) {
                // find the first div of the current row
                let colNb = Object.values(app.pacman.closest('.row').firstChild.classList).find(className => className.match(/^col[0-9]+$/));
                let rowNb = app.pacman.closest('.row').id;
                newPacman = document.querySelector('#' + rowNb + ' .' + colNb);
            } else {
                newPacman = app.pacman.nextSibling;
            }
        }
        
        else if (app.pacman.classList.contains('pacman-up')) {
            let colNb = Object.values(app.pacman.classList).find(className => className.match(/^col[0-9]+$/));
            let rowNb = app.pacman.closest('.row').previousSibling.id;
            newPacman = document.querySelector('#' + rowNb + ' .' + colNb);
        }
        
        else if (app.pacman.classList.contains('pacman-down')) {
            let colNb = Object.values(app.pacman.classList).find(className => className.match(/^col[0-9]+$/));
            let rowNb = app.pacman.closest('.row').nextSibling.id;
            newPacman = document.querySelector('#' + rowNb + ' .' + colNb);
        }

        // Can't walk on a wall
        if (!newPacman.classList.contains('wall')) {
            app.pacman.classList.remove('pacman-up', 'pacman-down', 'pacman-right','pacman-left');
            app.pacman.removeAttribute('id');

            newPacman.classList.add('pacman-' + app.direction);
            newPacman.setAttribute('id', 'pacman');

            app.pacman = newPacman;
        } else { // prevents unnecessary treatment
            clearInterval(app.forwardInterval);
        }
    },

    turnUp: () => {
        pacman.classList.remove('pacman-down', 'pacman-right','pacman-left')
        pacman.classList.add('pacman-up');
        app.direction = 'up';
    },

    turnDown: () => {
        pacman.classList.remove('pacman-up', 'pacman-right','pacman-left')
        pacman.classList.add('pacman-down');
        app.direction = 'down';
    },

    turnRight: () => {
        pacman.classList.remove('pacman-up', 'pacman-down','pacman-left')
        pacman.classList.add('pacman-right');
        app.direction = 'right';
    },

    turnLeft: () => {
        pacman.classList.remove('pacman-up', 'pacman-down', 'pacman-right')
        pacman.classList.add('pacman-left');
        app.direction = 'left';
    }
}