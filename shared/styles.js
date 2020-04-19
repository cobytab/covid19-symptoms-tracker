import { StyleSheet } from 'react-native';

export const colors = {
  dark: '#1e265c',
  light: '#ffffff',
  golden: '#ffaa51',
  grayish: '#718096',
  lightGray: '#E2E8F0',
};

export const basic = StyleSheet.create({
  container: {
    padding: 40,
    flex: 1,
    justifyContent: 'center',
  },
});

export const home = StyleSheet.create({
  view: {
    backgroundColor: colors.dark,
  },
  headView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: -35,
  },
  head: {
    fontSize: 100,
    color: colors.light,
    fontWeight: 'bold',
    textAlign: 'center',
    justifyContent: 'space-between',
  },
  headHyphen: {
    minWidth: '55%',
    margin: 10,
    backgroundColor: colors.light,
    height: 15,
  },
  mainInfo: {
    paddingVertical: 15,
  },
  mainInfoText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: colors.light,
  },
  subInfo: {
    paddingVertical: 5,
  },
  subInfoText: {
    color: colors.grayish,
    fontSize: 20,
  },
  buttonView: {
    paddingVertical: 15,
    marginTop: 20,
  },
  button: {
    backgroundColor: 'transparent',
    borderWidth: 0.5,
    borderColor: colors.grayish,
    borderRadius: 30,
    padding: 15,
    marginVertical: 8,
  },
  buttonText: {
    color: colors.light,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 19,
  },
  firstbtn: {
    backgroundColor: colors.golden,
    borderWidth: 0,
  },
  heart: {
    fontSize: 130,
    padding: 30,
  },
});

export const symptoms = StyleSheet.create({
  view: {
    backgroundColor: colors.light,
  },
  headText: {
    color: colors.dark,
  },
  regularbtnText: {
    color: colors.dark,
  },
  indicatorView: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: colors.light,
    padding: 40,
  },
  indicator: {
    backgroundColor: colors.lightGray,
    height: 5,
    minWidth: '15%',
    margin: 5,
  },
  indicatorActive: {
    backgroundColor: colors.dark,
  },
});

export const login = StyleSheet.create({
  input: {
    color: colors.golden,
    borderWidth: 1.5,
    borderColor: colors.light,
    borderRadius: 25,
    paddingVertical: 15,
    paddingHorizontal: 25,
    marginTop: 20,
    letterSpacing: 1,
  },
});
