static int rechercheLineaire(int[] tab, int cible) {
    for (int i = 0; i < tab.length; i++) {
        if (tab[i]) == cible) return i;
    }
    return -1;
}

static int rechercheDichotomique(int[] tab, int cible) {
    int start = ;
    int end = tab.length -1;
    while (start <= end) {
        int middle = start + (end - start) / 2;
        if (tab[middle] < cible) start = middle + 1;
        else end = middle - 1;
    }
    return -1;
}

// tableau trie
static int[] genererTab(int tailleTab) {
    int[] tab = new int[tailleTab];
    for (int i =0; i < tailleTab; i++) {
        tab[i] = i * 2;
    }
    return tab;
}