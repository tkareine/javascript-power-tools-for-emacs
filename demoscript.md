# Demoscript

## Prerequisites

Launch KeyCastr.

``` emacs-lisp
(set-face-font 'default "Input-24")

(require 'js2-mode)
(require 'tk-support)

;; remove my advice from .emacs.d
(advice-member-p #'tk-support/mute-fun #'js--multi-line-declaration-indentation)
(advice-remove #'js--multi-line-declaration-indentation #'tk-support/mute-fun)
```

HRM project:

- HEAD rev is 3298a3f
- Delete gtags files

Open terminal in `~/Projects/dotfiles/test`.

## Editing: js2-mode

Open `demo/fibonacci.js`

## js2-mode customizations

Open `demo/assign.js`

``` emacs-lisp
(defun mute-fun (&rest args)
  (message "muted")
  nil)

;; Don't double-indent multiline statement
(advice-add #'js--multi-line-declaration-indentation
            :around
            #'mute-fun)

(advice-member-p #'mute-fun #'js--multi-line-declaration-indentation)
;; (advice-remove #'js--multi-line-declaration-indentation #'mute-fun)
```

## rjsx-mode usage

Open `demo/SingleSelect.jsx`

## Editing: highlight-symbol

Open `demo/hrm/backend/src/site-states.js:148`

Toggle `highlight-symbol-next` (<kbd>F5</kbd>) for:

1. ealaStatsByEala
2. ealaStats

## Linting: Flycheck

Open `demo/hrm/backend/src/site-states.js:100`

1. Change `let sumTotal` to `const sumTotal`
2. Save
3. Run `flycheck-list-errors` (<kbd>C-c ! l</kbd>)
4. See error highlight (underline) in line 107

## File navigation: Projectile

Open `demo/hrm/frontend/src/staff-app/`

### Select project, find file

1. Select project, `counsel-projectile-switch-project` (<kbd>C-c p
   p</kbd>)
2. Enter `h r m`
3. Enter `est jsx`
4. Select `EstimatedWaitingStatsView.jsx`

### Attempt to open project file by relative path at point

1. Go to path at,
   `demo/hrm/frontend/src/staff-app/EstimatedWaitingStatsView.jsx:13`
2. Run `projectile-find-file-dwim` (<kbd>C-c F</kbd>)

### Find other file

1. Go to some empty line in
   `demo/hrm/frontend/src/staff-app/EstimatedWaitingStatsView.jsx`
2. Run `projectile-find-other-file` (<kbd>C-c o</kbd>)
3. Run it again to go back

## Symbol navigation: ggtags

### Generate tags files

1. Select hrm project, find file `demo/hrm/backend/src/site-states.js`
2. Open `*Messages*` buffer in other window (<kbd>C-x 4 b</kbd>)
3. Run `tk-dev/make-gtags` (<kbd>C-c T</kbd>)
4. Run `projectile-dired` (<kbd>C-c D</kbd>)
5. See gtags files

### Go to symbol definition (one hit)

1. Open `demo/hrm/backend/src/config.js:13`
2. See underline when point is at `parseBooleanOrDefault`
3. Run `ggtags-find-tag-dwim` (<kbd>M-.</kbd>)
4. See symbol definition
5. Go back, `xref-pop-marker-stack` (<kbd>M-,</kbd>)

### Go to symbol definition (many hits), find symbol references

1. Open `demo/hrm/backend/src/config.js:14`
2. Go to line 14, see underline when point at `parseIntegerPosOrDefault`
3. Run `ggtags-find-tag-dwim` (<kbd>M-.</kbd>)
4. See two symbol definitions, use `next-error` (<kbd>M-n</kbd>) and
   `previous-error` (<kbd>M-p</kbd>) to navigate hits, select second hit
5. Use `ggtags-navigation-mode-done` (<kbd>RETURN</kbd>) to close navigation
6. At definition (name) of `parseIntegerPosOrDefault` in
   `demo/hrm/shared/src/parsing.js:14`, run `ggtags-find-reference`
   (<kbd>M-?</kbd>)
7. Use `ggtags-navigation-mode-done` (<kbd>RETURN</kbd>) to close navigation

## ggtags: extending Ctags with regexes

1. Open `~/Projects/dotfiles/.ctags`
2. Show JS regexes
3. Open `~/Projects/dotfiles/test/gtags_test.sh`
4. Show `SYMBOLS_GLOBAL_SHOULD_FIND_ONE`, the symbols for which 1 (and
   only 1) match should be found
5. Show definitions in `~/Projects/dotfiles/test/fixture/gtags.jsx`
6. Open terminal, run `~/Projects/dotfiles/test/gtags_test.sh`

## Word completion: Company

1. Open `demo/hrm/backend/src/config.js:24`
2. Write `const enableFoo = parseS`, wait for company `company-complete`
   to trigger
3. Complete with `parseStringLC`
4. Observe that import is missing

## Grepping: ag.el, counsel-projectile

### ag.el

1. Go to `demo/hrm/backend/src/site-states.js:40`
2. Move point to `actualWaitMaxInMin`
3. Observe ggtags finds many definitions, but no references
4. Run `ag-project-regexp` (<kbd>C-c a</kbd>)
5. See usages in string literals
6. Change string literal value to something else
7. Go back to ag result buffer
8. Rerun the search with `recompile` (<kbd>g</kbd>)

### counsel-projectile-ag

1. (Continuing above…)
2. Go back to `demo/hrm/backend/src/site-states.js:40`
3. Move point back to `actualWaitMaxInMin`
4. Run `counsel-projectile-ag` (<kbd>C-c s</kbd>)
5. Select first hit
