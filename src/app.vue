<template>
  <div class="container">
    <div class="tile is-ancestor">
      <div class="tile is-vertical is-12">
        <div class="tile is-block-mobile">
          <div class="tile is-parent">
            <Tile @click="onClickTile" :isChild="true">1</Tile>
          </div>
          <div class="tile is-vertical">
            <div class="tile is-parent">
            <Tile @click="onClickTile" :isChild="true">2</Tile>
            </div>
            <div class="tile">
              <div class="tile is-parent">
            <Tile @click="onClickTile" :isChild="true">3</Tile>
              </div>
              <div class="tile is-parent">
            <Tile @click="onClickTile" :isChild="true">4</Tile>
              </div>
            </div>
          </div>
        </div>
        <div class="tile is-block-mobile">
          <div class="tile is-parent is-vertical">
            <Tile @click="onClickTile" :isChild="true">5</Tile>
            <Tile @click="onClickTile" :isChild="true" :isLarge="true">6</Tile>
          </div>
          <div class="tile is-parent">
            <Tile @click="onClickTile" :isChild="true">7</Tile>
          </div>
          <div class="tile is-parent is-vertical">
            <Tile @click="onClickTile" :isChild="true" :isLarge="true">8</Tile>
            <Tile @click="onClickTile" :isChild="true">9</Tile>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./app.ts" lang="ts" />